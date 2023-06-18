import Feedback from "@models/feedbacks";
import { connectToDatabase } from "@utils/database";
import { notify } from "@utils/notification";

export async function POST(req: Request) {
  const data = await req.json();

  try {
    await connectToDatabase();
    const newFeedback = new Feedback({ ...data });
    await newFeedback.save();
    return new Response(JSON.stringify(newFeedback), { status: 201 });
  } catch (error) {
    notify("error", "Вибачте, щось пішло не так... Спробуйте ще раз!");
  }
}

export async function GET() {
  console.log("in route");
  try {
    await connectToDatabase();
    console.log("DB connected");
    const result = await Feedback.find({});
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    return new Response(JSON.stringify(result), { status: 200, headers });
  } catch (error) {
    notify("error", "Вибачте, щось пішло не так... Спробуйте ще раз!");
  }
}
