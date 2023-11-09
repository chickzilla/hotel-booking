export default async function userRegister(
  userName: string,
  userEmail: string,
  userTel: string,
  userPassword: string
) {
  const response = await fetch("http://localhost:5000/api/v1/auth/register", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
      tel: userTel,
      role: "user",
      password: userPassword,
      createdAt: "2023-08-20",
    }),
  });
  if (!response.ok) throw new Error("Failed to fetch register");

  return response.json();
}
