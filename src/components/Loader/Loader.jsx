import { Hourglass } from "react-loader-spinner";

export default function Loader() {
  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{ marginTop: "20", marginLeft: "40" }}
      wrapperClass=""
      colors={["#18161B", "#5B4B4A"]}
    />
  );
}
