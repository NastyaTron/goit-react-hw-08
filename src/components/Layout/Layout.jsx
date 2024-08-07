import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <main>{children}</main>
    </div>
  );
}
