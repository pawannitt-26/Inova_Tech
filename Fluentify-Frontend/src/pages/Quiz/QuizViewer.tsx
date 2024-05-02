import { Card, Text, Image, Badge, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const QuizViewer = () => {
    const navigate = useNavigate()

    const handleQuiz = () => {
        navigate('/attemptQuiz');
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
                                <Text fw={600}>All India English Competetion</Text>
                            </div>
                            <Badge color="pink" style={{alignSelf:"center"}}>Intermediate</Badge>
                        </div>
                        <button onClick={handleQuiz} className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md " style={{ position: "absolute", top: "60%", marginLeft: "10%" }}>
                            Attempt Quiz
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
                                <Text fw={600}>அனைத்து இந்திய தமிழ் போட்டியல்</Text>
                            </div>
                            <Badge color="pink" style={{alignSelf:"center"}}>Intermediate</Badge>
                        </div>
                        <button onClick={handleQuiz} className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md " style={{ position: "absolute", top: "60%", marginLeft: "10%" }}>
                            Attempt Quiz
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
                                <Text fw={600}>सभी भारतीय हिंदी प्रतियोगिता</Text>
                            </div>
                            <Badge color="pink" style={{alignSelf:"center"}}>Intermediate</Badge>
                        </div>
                        <button onClick={handleQuiz} className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md " style={{ position: "absolute", top: "60%", marginLeft: "10%" }}>
                            Attempt Quiz
                        </button>
                    </Card>
                    </div>

                </Card>
            </div>
        </>
    )
}

export default QuizViewer;