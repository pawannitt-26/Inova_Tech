import { Card, Image,Text,Badge } from '@mantine/core';
import FlashCardModel from './FlashCardModel';
const Container = () => {
    return (
        <div>
            <Card
                shadow="xs"
                padding="lg"
                radius="md"
                className="w-[280px] h-[300px] cursor-pointer transition-all"
                withBorder
            >
                <Card.Section>
                    <Image
                        src=".//src/assets/pic/city.jpg"
                        height={80}
                        alt="Norway"
                    />
                </Card.Section>
                <div className="flex flex-col mt-1">
                    <div className="mb-2">
                        <Text fw={500}>Vishrudh Sir</Text>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <Badge color="green">Greek</Badge>
                        <Badge color="green">Advanced</Badge>
                    </div>
                </div>
                <div style={{ position: "absolute", top: "85%", }}>
                    <FlashCardModel title={'Hi pawan'} text={'glDWGDYHB kbchbsCY CBIbcib'}></FlashCardModel>
                </div>
            </Card>
        </div>
    )
}

export default Container;