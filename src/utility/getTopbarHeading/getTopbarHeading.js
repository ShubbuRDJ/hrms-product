export default function getTopbarHeading(userType, locationPath) {
    switch(true) {
      case locationPath.includes('/dashboard'):
        return 'Dashboard';
      case locationPath.includes('/resources') && userType === 'super_admin':
        return 'Resources';
      case locationPath.includes('/resources'):
        return 'My Team';
      case locationPath.includes('/project'):
        return 'Projects';
      case locationPath.includes('/manageRequest'):
        return 'Manage Request';
      case locationPath.includes('/profile'):
        return 'Profile';
      case locationPath.includes('/changePassword'):
        return 'Change Password';
      default:
        return '';
    }
  }