import React from 'react';

// Components
import { Link, Icon } from '@chakra-ui/react';
import {
  AiFillInstagram as Instagram,
  AiFillGithub as GitHub,
  AiFillLinkedin as LinkedIn,
  AiOutlineTwitter as Twitter,
} from 'react-icons/ai';
import { FaSpotify as Spotify } from 'react-icons/fa';

const SocialMedia = ({ channel }) => {
  const renderIcon = (variant) => {
    switch (variant) {
      case 'instagram':
        return Instagram;
      case 'github':
        return GitHub;
      case 'linkedin':
        return LinkedIn;
      case 'twitter':
        return Twitter;
      case 'spotify':
        return Spotify;
      default:
    }
  };

  return (
    <Link href={channel.link}>
      <Icon
        as={renderIcon(channel.icon)}
        width={30}
        height={30}
        color="#3492D0"
      />
    </Link>
  );
};

export default SocialMedia;
