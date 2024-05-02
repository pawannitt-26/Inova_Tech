import { SetStateAction, useState } from 'react';
import { Card, Image, Text, Badge } from '@mantine/core';
import EmailEditor from '../../components/Emaileditor/Emaileditor';

const Profile = ({ bio, name }) => {
  // State variable to hold the rating value
  const [rating, setRating] = useState(8.5);
  // State variable to hold the email value
  const [email, setEmail] = useState('pawan324005@gmail.com');

  // Function to update the rating
  const updateRating = (newRating: SetStateAction<number>) => {
    setRating(newRating);
  };

  // Function to handle changes in the email input field
  const handleEmailChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  // Function to generate an array of stars based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating) / 2; i++) {
      stars.push(<img key={i} src=".//src/assets/star.svg" alt="star"></img>);
    }
    // If the rating has decimal part, add a half star
    if (rating % 1 !== 0) {
      stars.push(
        <img
          key="half-star"
          width="20"
          height="20"
          src=".//src/assets/halfstar.png"
          alt="half-star"
        ></img>
      );
    }
    return stars;
  };

  return (
    <>
      <div style={{ width: '40%', height: 'auto', background: '' }}>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          className="w-[300px] h-fit  cursor-pointer transition-all"
          withBorder
          style={{ position: 'absolute', left: '22%', top: '24%' }}
        >
          <Card.Section>
            <Image src=".//src/assets/profile.png" height={80} alt="Norway" />
          </Card.Section>

          <div className="flex flex-col mt-4 mb-4">
            <div className="mb-2">
              <Text fw={500}>{name}</Text>
            </div>
          </div>

          <Text size="sm" c="dimmed">
            {bio}
          </Text>
        </Card>
      </div>

      <div style={{ width: '60%', height: 'auto', padding: '4%' }}>
        <div className="flex flex-col mt-4 mb-4">
          <div className="mb-2">
            <Text fw={500}>Courses</Text>
          </div>
          <div className="flex gap-2">
            <Badge color="#7272f1">Greek</Badge>
            <Badge color="#7272f1">Intermediate</Badge>
            <Badge color="#7272f1">Tamil</Badge>
            <Badge color="#7272f1">Hindi</Badge>
          </div>
        </div>

        <div className="flex flex-col mt-4 mb-4">
          <div className="mb-2">
            <Text fw={500}>Rating</Text>
          </div>
          <div className="mb-2 flex gap-2">
            {/* Displaying the dynamic stars */}
            <Text fw={500}>8.5</Text>
            {renderStars()}
          </div>
        </div>

        <div className="flex flex-col mt-4 mb-4">
          <div className="mb-2">
            <Text fw={700}>Address</Text>
          </div>
          <div className="mb-1.5 flex gap-2">
            <Text>New York, NY 10651-78 156-187-60</Text>
          </div>
        </div>

        <div className="flex flex-col mt-4 mb-4">
          <div className="mb-2">
            <Text fw={700}>Email</Text>
          </div>
          <div className="mb-1.5 flex gap-2">
            {/* Using EmailEditor component for email editing */}
            <EmailEditor
              defaultEmail="pawan324005@gmail.com"
              onEmailChange={() => {}}
            />
          </div>
        </div>
        <div className="flex  mt-4 mb-4 gap-2">
          <div className="mb-2 gap-2">
            <Text fw={700}>Gender</Text>
          </div>
          <div className="mb-1.5 flex gap-2">
            <img
              src=".//src/assets/man.png"
              width="25"
              height="25"
              alt="man"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

// import React from 'react';
// import { Card, Image, Text, Badge } from '@mantine/core';
// import { useProfile } from './ProfileContext';
// import EmailEditor from '../../components/Emaileditor/Emaileditor';

// const Profile: React.FC = () => {
//   const { bio, name, rating, email } = useProfile();

//   // Function to generate an array of stars based on the rating
//   const renderStars = () => {
//     const stars = [];
//     for (let i = 0; i < Math.floor(rating) / 2; i++) {
//       stars.push(<img key={i} src=".//src/assets/star.svg" alt="star" />);
//     }
//     // If the rating has decimal part, add a half star
//     if (rating % 1 !== 0) {
//       stars.push(<img key="half-star" width="20" height="20" src=".//src/assets/halfstar.png" alt="half-star" />);
//     }
//     return stars;
//   };

//   return (
//     <>
//       <div style={{ width: "40%", height: "auto", background: "black" }}>
//         <Card
//           shadow="sm"
//           padding="lg"
//           radius="md"
//           className="w-[300px] h-fit  cursor-pointer transition-all"
//           withBorder
//           style={{ position: "absolute", left: "22%", top: "26%" }}
//         >
//           <Card.Section>
//             <Image
//               src=".//src/assets/profile.png"
//               height={80}
//               alt="Norway"
//             />
//           </Card.Section>

//           <div className="flex flex-col mt-4 mb-4">
//             <div className="mb-2">
//               <Text fw={500}>{name}</Text>
//             </div>
//           </div>

//           <Text size="sm" c="dimmed">
//             {bio}
//           </Text>

//         </Card>
//       </div>

//       <div style={{ width: "60%", height: "auto", background: "blue", padding: "4%" }}>
//         <div className="flex flex-col mt-4 mb-4">
//           <div className="mb-2">
//             <Text fw={500}>Courses</Text>
//           </div>
//           <div className="flex gap-2">
//             <Badge color="#7272f1">Greek</Badge>
//             <Badge color="#7272f1">Intermediate</Badge>
//             <Badge color="#7272f1">Tamil</Badge>
//             <Badge color="#7272f1">Hindi</Badge>
//           </div>
//         </div>

//         <div className="flex flex-col mt-4 mb-4">
//           <div className="mb-2">
//             <Text fw={500}>Rating</Text>
//           </div>
//           <div className="mb-2 flex gap-2">
//             {/* Displaying the dynamic stars */}
//             <Text fw={500}>8.5</Text>
//             {renderStars()}
//           </div>
//         </div>

//         <div className="flex flex-col mt-4 mb-4">
//           <div className="mb-2">
//             <Text fw={700}>Address</Text>
//           </div>
//           <div className="mb-1.5 flex gap-2">
//             <Text>New York, NY 10651-78 156-187-60</Text>
//           </div>
//         </div>

//         <div className="flex flex-col mt-4 mb-4">
//           <div className="mb-2">
//             <Text fw={700}>Email</Text>
//           </div>
//           <div className="mb-1.5 flex gap-2">
//             {/* Using EmailEditor component for email editing */}
//             <EmailEditor defaultEmail={email} onEmailChange={() => {}} />
//           </div>
//         </div>
//         <div className="flex  mt-4 mb-4 gap-2" >
//           <div className="mb-2 gap-2">
//             <Text fw={700}>Gender</Text>
//           </div>
//           <div className="mb-1.5 flex gap-2">
//             <img src=".//src/assets/man.png" width="25" height="25" alt="man" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;
