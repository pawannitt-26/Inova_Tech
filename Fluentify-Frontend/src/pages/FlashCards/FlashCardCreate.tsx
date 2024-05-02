import { Card, Input } from '@mantine/core';
import { useState } from 'react';

const FlashCardCreate = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSave = () => {
        console.log("Title:", title);
        console.log("Text:", text);
        window.location.href = "/myschedule";
    };

    return (
        <div>
            <Card
                shadow="xs"
                padding="lg"
                radius="md"
                className="w-[500px] h-[550px] cursor-pointer transition-all"
                withBorder
                style={{ position: "absolute", left: "40%", top: "24%", }}
            >
                <Card.Section style={{ padding: "2%" }}>
                    <Input 
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Enter the Title" 
                    />
                    <Card
                        shadow="sm"
                        padding="lg"
                        radius="md"
                        className="w-[360px] h-[350px] cursor-pointer transition-all"
                        withBorder
                        style={{ position: "absolute", left: "14%", top: "14%" }}
                    >
                        <textarea 
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                            style={{
                                width: "100%", 
                                height: "100%", 
                                borderColor: "black",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                border: "1px solid black",
                                padding: "8px", 
                                boxSizing: "border-box", 
                                fontSize: "inherit", 
                                lineHeight: "1.5",
                                resize: "none",
                                outline: "none",
                            }}
                        />
                    </Card>
                </Card.Section>

                <button 
                    onClick={handleSave}
                    className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md " 
                    style={{ position: "relative", top: "80%" }}
                >
                    Save
                </button>
            </Card>
        </div>
    );
};

export default FlashCardCreate;
