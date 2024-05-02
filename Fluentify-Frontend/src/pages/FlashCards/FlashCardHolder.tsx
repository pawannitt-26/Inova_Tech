import { Card, Text, Image, Badge, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const FlashCardHolder = () => {
    const navigate = useNavigate()

    const handleQuiz = () => {
        navigate('/viewFlash');
    }

    return (
        <>
            <div>
                <Card
                    shadow="sm"
                    radius="md"
                    className="w-[1100px] h-fit cursor-pointer transition-all"
                    withBorder
                    style={{ position: "absolute", top: "24%", left: "22%", }}
                >
                    <div style={{display:"flex",gap:"8%",paddingLeft:"5%"}}>
                    <Card
                        shadow="sm"
                        padding="xl"
                        radius="md"
                        className="w-[250px] h-[200px] cursor-pointer transition-all"
                        withBorder
                    >
                        <div className="flex flex-col mt-2" style={{textAlign:"center"}} >
                            <div className="mb-2">
                                <Text fw={600}>English</Text>
                                <Text fw={500}>Naina Mam</Text>
                            </div>
                            <Badge color="pink" style={{alignSelf:"center"}}>Intermediate</Badge>
                        </div>
                        <button onClick={handleQuiz} className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md " style={{ position: "absolute", top: "60%"}}>
                        VIEW FLASHCARDS
                        </button>
                    </Card>

                    <Card
                        shadow="sm"
                        padding="xl"
                        radius="md"
                        className="w-[250px] h-[200px] cursor-pointer transition-all"
                        withBorder
                    >
                        <div className="flex flex-col mt-2" style={{textAlign:"center"}} >
                            <div className="mb-2">
                                <Text fw={600}>French</Text>
                                <Text fw={500}>Daniel Sir</Text>
                            </div>
                            <Badge color="pink" style={{alignSelf:"center"}}>Intermediate</Badge>
                        </div>
                        <button onClick={handleQuiz} className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md " style={{ position: "absolute", top: "60%", }}>
                        VIEW FLASHCARDS
                        </button>
                    </Card>

                    <Card
                        shadow="sm"
                        padding="xl"
                        radius="md"
                        className="w-[250px] h-[200px] cursor-pointer transition-all"
                        withBorder
                    >
                        <div className="flex flex-col mt-2" style={{textAlign:"center"}} >
                            <div className="mb-2">
                                <Text fw={600}>Sanskrit</Text>
                                <Text fw={500}>Pushkar Maharaj</Text>
                            </div>
                            <Badge color="pink" style={{alignSelf:"center"}}>Intermediate</Badge>
                        </div>
                        <button onClick={handleQuiz} className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md " style={{ position: "absolute", top: "60%", }}>
                            VIEW FLASHCARDS
                        </button>
                    </Card>
                    </div>

                </Card>
            </div>
        </>
    )
}

export default FlashCardHolder;