import { ConnectButton } from "@rainbow-me/rainbowkit";

function Page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      <ConnectButton
        accountStatus={"full"}
        chainStatus={"full"}
        showBalance={true}
        label="Connect"
      />
    </div>
  );
}

export default Page;
