/* eslint-disable react/require-default-props */
import { v4 } from 'uuid';
import { ReactComponent as LocationIcon } from "../../../public/icon-location.svg";
import { ReactComponent as BlogIcon } from "../../../public/icon-website.svg";
import { ReactComponent as TwitterIcon } from "../../../public/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "../../../public/icon-company.svg";

import InfoItem from '../InfoItem/InfoItem';

import classes from './UserInfo.module.scss';
import { Icon } from '../../types';

export interface UserInfoProps {
  company?: string;
  location?: string;
  twitter?: string;
  blog?: string;
}

function UserInfo({ blog, company, location, twitter }: UserInfoProps) {

  const icons: Icon[] = [
    {
      text: location,
      component: <LocationIcon /> ,
    },
    {
      text: blog,
      component: <BlogIcon/> ,
      isLink: true,
    },
    {
      text: twitter,
      component: <TwitterIcon/>,
    },
    {
      text: company,
      component: <CompanyIcon />,
    },
  ];

  return (
    <div className={classes.userInfo}>
      {icons.map((icon) => (
        <InfoItem icon={icon} key={v4()} />
      ))}
    </div>
  );
}


export default UserInfo;