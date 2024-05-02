import React, { useState } from 'react';
import { Card, Button, Textarea, Input, Radio, Text } from '@mantine/core';

const CreateTest = () => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [optionLabels, setOptionLabels] = useState({
        A: '',
        B: '',
        C: '',
        D: ''
    });

    const handleOptionSelect = (option) => {
        setSelectedAnswer(option);
    };

    const handleLabelChange = (option, value) => {
        setOptionLabels({ ...optionLabels, [option]: value });
    };

    return (
        <>
            <div style={{ width: "108%", height: "108%", background: "" }}>
                <Card
                    shadow="sm"
                    padding="xl"
                    radius="md"
                    className="w-[600px] h-[530px] cursor-pointer transition-all"
                    withBorder
                    style={{ position: "absolute", top: "24%", left: "22%" }}
                >
                    <Input placeholder='Here write your question' style={{ marginBottom: "4%" }} />

                    <Card withBorder style={{ marginBottom: "2%", padding: "5%" }} >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {['A', 'B', 'C', 'D'].map(option => (
                                <div key={option} style={{display:"flex",gap:"5%"}}>
                                    <Radio
                                        name="options"
                                        value={option}
                                        checked={selectedAnswer === option}
                                        onChange={() => handleOptionSelect(option)}
                                        style={{ marginBottom: "4%" }}
                                    />
                                    <Input
                                        placeholder={`Option ${option}`}
                                        value={optionLabels[option]}
                                        onChange={(e) => handleLabelChange(option, e.target.value)}
                                        style={{ marginBottom: "4%" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card withBorder style={{ marginBottom: "5%" }} shadow="sm">
                        <Input placeholder={`Answer: ${selectedAnswer}`} readOnly />
                    </Card>

                    <Card.Section>
                        <Button style={{ position: 'absolute', top: "83%", left: "5%", padding: "2%", width: "7rem" }} className="mt-[28px] text-[168x] h-[40px] flex justify-center items-center text-white p-3 bg-[#3188E7] hover:bg-[#43a0fc] active:bg-[#3178bb] transition-all rounded-xl ">
                            PREVIOUS
                        </Button>
                        <Button style={{ position: 'absolute', top: "83%", left: "41%", padding: "2%", width: "7rem" }} className="mt-[28px] text-[168x] h-[40px] flex justify-center items-center text-white p-3 bg-[#3188E7] hover:bg-[#43a0fc] active:bg-[#3178bb] transition-all rounded-xl ">
                            SUBMIT
                        </Button>
                        <Button style={{ position: 'absolute', top: "83%", left: "75%", padding: "2%", width: "7rem" }} className="mt-[28px] text-[168x] h-[40px] flex justify-center items-center text-white p-3 bg-[#3188E7] hover:bg-[#43a0fc] active:bg-[#3178bb] transition-all rounded-xl ">
                            NEXT
                        </Button>
                    </Card.Section>
                </Card>


                <Card
                    shadow="sm"
                    padding="xl"
                    radius="md"
                    className="w-[400px] h-[280px] cursor-pointer transition-all"
                    withBorder
                    style={{ position: "absolute", top: "24%", left: "68%" }}
                >
                    <Input placeholder='Title' style={{ marginBottom: "6%" }} />
                    <Textarea placeholder='Description' style={{ marginBottom: "6%" }} />
                    <div style={{display:"flex",gap:"2%"}}>
                        <Text style={{fontSize:"1.5rem",fontWeight:"550"}}>
                            Number of Questions :
                        </Text>
                        <Text style={{fontSize:"1.5rem",fontWeight:"550"}}>
                            0
                        </Text>
                    </div>
                </Card>
            </div>

        </>
    );
}

export default CreateTest;
