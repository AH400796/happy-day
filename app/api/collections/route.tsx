import Collection from "@models/collections";
import { connectToDatabase } from "@utils/database";

export async function GET() {
  try {
    await connectToDatabase();

    const result = await Collection.find({});

    return new Response(JSON.stringify(result));
  } catch (error) {}
}


