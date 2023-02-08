const createTokenUser = (user) => {
  return {
    nama: user.nama,
    id: user._id,
    role: user.role,
    email: user.email,
  };
};

module.exports = {
  createTokenUser,
};
