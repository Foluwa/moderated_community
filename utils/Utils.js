const checkUserRole = (session) => {
  console.log('checkUserRole',  session);
  if (
    !session ||
    !session.user ||
    !session.user.organizationMemberships ||
    session.user.organizationMemberships.length === 0
  ) {
    return null;
  }

  const organizationMemberships = session.user.organizationMemberships;

  for (const membership of organizationMemberships) {
    if (membership.role) {
      return membership.role.toLowerCase();
    }
  }

  return null;
}

const getUserRole = (session) => {
  console.log('getUserRole',  session);
  // Check if the user session exists and the has user data
  if (session && session.user && session.user.organizationMemberships) {
    const organizationMemberships = session.user.organizationMemberships;
    if (organizationMemberships.length === 0) {
      return 'The organization is null and has no roles.';
    }
    const role = organizationMemberships[0].role;
    
    if (role) {
      return role;
    } else {
      return null;
    }
  }
  return null;
}

export { checkUserRole, getUserRole };
