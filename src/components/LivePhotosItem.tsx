import * as React from 'react'
import * as LivePhotosKit from 'livephotoskit'

class LivePhotosItem extends React.Component<{
  chatRoom: ChatRoom;
  currentUserId?: string;
  keyword?: string;
  notLink?: boolean;
  withoutRight?: boolean;
  withoutMessage?: boolean;
  withCheckbox?: boolean;
  isChecked?: boolean;
  onClick?: React.EventHandler<React.MouseEvent<HTMLAnchorElement>>;
  to?: string;
}, {}> {

  export default LivePhotosItem
