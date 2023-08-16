export function middleware() {
  console.log(process.env.MY_VAR);
  console.log(process.env.MY_VAR_DASHBOARD);
  console.log(process.env.NEXT_PUBLIC_MY_PUBLIC_VAR);
}
