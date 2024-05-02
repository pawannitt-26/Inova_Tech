import { Button, Card, Image, Text } from "@mantine/core";

const Wallet = ({ balance }) => {
    return (
        <>
            <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="w-[250px] h-[250px]  cursor-pointer transition-all"
                withBorder
            >
                <Card.Section style={{ marginTop: "5px" }}>
                    <Text style={{ textAlign: "center", fontSize: "35px", fontWeight: "500", marginBottom: "20%" }}>
                        BALANCE
                    </Text>
                    <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
                        <Text style={{ textAlign: "center", fontSize: "35px", position: "absolute", left: "27%", top: "48%" }}>
                            {balance}
                        </Text>
                        <Image
                            src="./src/assets/coin.svg"
                            style={{ width: "37px", height: "37px", position: "absolute", left: "62%", }}
                        />
                    </div>
                </Card.Section>
                <Button onClick={() => {
                }} className="mt-[25px] text-[14px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md " style={{position:"absolute",top:"68%",marginLeft:"20%"}}>
                    Recharge
                </Button>
            </Card>
        </>
    )
}

export default Wallet;
