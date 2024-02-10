import { groq } from "next-sanity";
import { client } from "./client";

export async function getPersonalInfo() {
    const query = groq`*[_type == "personalInfo"]`;
    return client.fetch(query);
}

