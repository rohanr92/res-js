import { NextResponse } from "next/server";
import { foods } from "./data";

// export async function GET() {
//   return NextResponse.json({ foods });
// }

export async function POST(req) {
  const data = await req.json();
  if (!data?.name || data.price == null) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const newFood = { id: foods.length + 1, ...data };
  foods.push(newFood);

  return NextResponse.json({ message: "Food added", foods }, { status: 201 });
}


export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  // If no id → return all foods
  if (!id) {
    return NextResponse.json({ foods });
  }

  const food = foods.find(f => f.id === Number(id));

  if (!food) {
    return NextResponse.json(
      { error: "Food not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(food);
}