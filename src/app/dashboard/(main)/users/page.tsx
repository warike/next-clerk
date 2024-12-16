"use server"
import Container from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";

export default async function UsersPage(){
    
    return (
        <Container>
            <Title className="mb-8">
                Users
            </Title>
        </Container>
    )
}