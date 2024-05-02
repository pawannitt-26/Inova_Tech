import expressAsyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel';
import Student from '../models/studentModel';
import Tutor from '../models/tutorModel';

const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  console.log(user, password);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).json({
      status: 'fail',
      message: 'Invalid email or password',
    });
    return;
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  });

  res
    .status(200)
    .cookie('trinity', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
    })
    .json({
      status: 'success',
      user,
    });
});

const register = expressAsyncHandler(async (req, res) => {
  const { username, email, password, role } = req.body;

  if (role == 'ADMIN') {
    res.status(400).json({
      status: 'fail',
      message: 'Cannot register as admin',
    });
  }
  const checkExists = await User.findOne({ email });
  if (checkExists) {
    res.status(400).json({
      status: 'fail',
      message: 'User already exists',
    });
  }
  const user = await User.create({ username, role, email, password });

  if (user.role == 'STUDENT') {
    const student = await Student.create({ user: user._id });
  }
  if (user.role == 'TUTOR') {
    const tutor = await Tutor.create({ user: user._id });
  }
  if (process.env.ENV != 'DEV') {
    user.password = '';
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  });
  console.log(token);
  const student = await Student.findOne({ user: user._id }).populate('user');
  console.log(student);
  res
    .status(200)
    .cookie('trinity', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      expires: new Date(Date.now() + 900000000),
    })
    .json({
      status: 'success',
      user: user.role == 'STUDENT' ? student : user,
    });
});

const logout = expressAsyncHandler(async (req, res) => {
  res
    .status(200)
    .cookie('trinity', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV != 'DEV',
      expires: new Date(0),
    })
    .json({
      status: 'success',
    });
});

const protect = expressAsyncHandler(async (req: any, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (req.cookies.trinity) {
    token = req.cookies.trinity;
  }
  console.log(JSON.stringify(req.cookies));
  if (!token) {
    res.status(401).json({
      status: 'fail',
      message: 'Not authorized, no token',
    });
  }
  const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
  req.user = await User.findById(decoded.id).select('-password');
  next();
});

const restricTo = (...roles: string[]) => {
  return (req: any, res: any, next: any) => {
    if (!roles.includes(req.user.role)) {
      res.status(403).json({
        status: 'fail',
        message: 'You do not have permission to perform this action',
      });
    }
    next();
  };
};

const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    status: 'success',
    users,
  });
});

const deleteUser = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const userCopy = await User.findById(id);
  if (!userCopy) {
    res.status(404).json({
      status: 'fail',
      message: 'User not found',
    });
    return;
  }
  if (userCopy.role == 'ADMIN') {
    res.status(400).json({
      status: 'fail',
      message: 'Cannot delete admin',
    });
    return;
  }
  const user = await User.findByIdAndDelete(id);
  res.status(200).json({
    status: 'success',
    user,
  });
});

export { login, register, logout, protect, restricTo, getAllUsers, deleteUser };
