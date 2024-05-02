import { Card, Image, Button, Input, Radio, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';



const Resources = () => {
    const navigate = useNavigate()

    const handleQuiz=()=>{
        navigate('/viewQuiz');
    }

    const handleFlashCard=()=>{
        navigate('/displayFlashCards');
    }

    return (
        <>
            <div style={{ width: "108%", height: "108%", background: "" }}>
                <Card
                    shadow="sm"
                    padding="xl"
                    radius="md"
                    className="w-[500px] h-[500px] cursor-pointer transition-all"
                    withBorder
                    style={{ position: "absolute", top: "24%", left: "22%" }}
                >
                    <Card.Section>
                        <Image
                            src=".//src/assets/quiz.jpg"
                            height={80}
                            alt="Norway"
                        />
                    </Card.Section>
                    <div className="flex flex-col mt-12 mb-4">
                        <div className="mb-2">
                            <Text fw={500}>"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt</Text>
                        </div>
                    </div>
                    <button onClick={handleQuiz} className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md " style={{ position: "absolute", top: "80%" }}>
                        Quiz
                    </button>
                </Card>


                <Card
                    shadow="sm"
                    padding="xl"
                    radius="md"
                    className="w-[500px] h-[500px] cursor-pointer transition-all"
                    withBorder
                    style={{ position: "absolute", top: "24%", left: "62%" }}
                >
                    <Card.Section>
                        <Image
                            src=".//src/assets/flashcards.png"
                            height={80}
                            alt="Norway"
                        />
                    </Card.Section>
                    <div className="flex flex-col mt-10 mb-4">
                        <div className="mb-2">
                            <Text fw={500}>"Flashcards are like little knowledge nuggets that fit in your pocket, waiting to be unearthed whenever you need them most."</Text>
                        </div>
                    </div>
                    <button onClick={handleFlashCard} className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md " style={{ position: "absolute", top: "80%" }}>
                        FlashCards
                    </button>
                </Card>

            </div>

        </>
    );
}

export default Resources;
