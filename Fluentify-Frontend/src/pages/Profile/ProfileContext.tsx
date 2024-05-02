import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface ProfileData {
  bio: string;
  name: string;
  rating: number;
  email: string;
}

const ProfileContext = createContext<ProfileData | null>(null);

const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    // Fetch profile data from the backend
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:3000/profile');
    //     const data: ProfileData = await response.json();
    //     setProfileData(data);
    //   } catch (error) {
    //     console.error('Error fetching profile data:', error);
    //   }
    // };

    // fetchData();
  }, []);

  return (
    <ProfileContext.Provider value={profileData}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = (): ProfileData | null => {
  const profileData = useContext(ProfileContext);
  if (!profileData) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return profileData;
};

export { ProfileProvider, useProfile };
