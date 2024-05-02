import { Card, Text, Button, Radio, Group } from '@mantine/core';
import { useState, useEffect } from 'react';

const AttemptTest = () => {
    const [checked, setChecked] = useState(false);
    const [time, setTime] = useState(600); // Initial time in seconds (10 minutes)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => {
                if (prevTime === 0) {
                    clearInterval(timer);
                    return prevTime;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []); // Runs only on component mount

    // Format the time into MM:SS format
    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <>
            <div style={{ width: "108%", height: "108%", background: "" }}>
                <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    className="w-[600px] h-[500px] cursor-pointer transition-all"
                    withBorder
                    style={{ position: "absolute", top: "24%", left: "38%" }}
                >
                    <Card.Section>
                        <Text style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center", padding: "3.2%", marginBottom: "2.2%" }}>
                            WHAT KIND OF SERVICES YOU ARE QUIZ ?
                        </Text>
                        <Text className="text-[168x] h-[40px] flex justify-center items-center text-white p-2 bg-[#3188E7] hover:bg-[#43a0fc] active:bg-[#3178bb] transition-all rounded-xl " style={{ fontSize: "1r8m", fontWeight: "700", textAlign: "center", padding: "2%", width: "30%", borderRadius: "2.5rem", position: "absolute", left: "35%" }}>
                            QUESTION 1 To 5
                        </Text>
                        <div style={{ position: "absolute", top: "40%", padding: "5%", left: "5%" }}>
                            <Radio.Group
                                // label={<span style={{ fontSize: '1.8rem',fontWeight:"600",paddingBottom:"3%"}}>What is your favourite Language</span>}
                                // withAsterisk
                            >
                                <Group mt="xs">
                                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "30%" }}>
                                        <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "20%", gap: "65%" }}>
                                            <Radio style={{ marginLeft: "20%" }} value="react" label={<span style={{ fontSize: '1.8rem', fontWeight: "500" }}>React</span>} />
                                            <Radio value="svelte" label={<span style={{ fontSize: '1.8rem', fontWeight: "500" }}>Svelte</span>} />
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-evenly", gap: "65%" }}>
                                            <Radio style={{ marginLeft: "20%" }} value="ng" label={<span style={{ fontSize: '1.8rem', fontWeight: "500" }}>Angular</span>} />
                                            <Radio value="vue" label={<span style={{ fontSize: '1.8rem', fontWeight: "500" }}>Vue</span>} />
                                        </div>
                                    </div>
                                </Group>
                            </Radio.Group>
                        </div>
                        <Button style={{ position: 'absolute', top: "82%", left: "75%", padding: "2%", width: "7rem" }} className="mt-[28px] text-[168x] h-[40px] flex justify-center items-center text-white p-3 bg-[#3188E7] hover:bg-[#43a0fc] active:bg-[#3178bb] transition-all rounded-xl ">
                            NEXT
                        </Button>
                    </Card.Section>
                </Card>

                <img style={{ width: "30px", height: "30px", position: "absolute", left: "84%", top: "17%" }} src='.//src/assets/timer.png' alt="timer" />
                <Text className="text-[168x] h-[40px] flex justify-center items-center text-black p-2 " style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center", padding: "2%", width: "30%", borderRadius: "2.5rem", position: "absolute", left: "75%", top: "15%" }}>
                    {formatTime()} {/* Display formatted time */}
                </Text>
            </div>
        </>
    );
}

export default AttemptTest;
