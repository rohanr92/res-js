import { NextResponse } from "next/server";
import { foods } from "../data";

export async function GET(req, context) {
  const params = await context.params; // <-- unwrap the promise
  const id = Number(params.id);

  console.log(id);
  

  const food = foods.find(f => f.id === id);

  if (!food) {
    return NextResponse.json({ error: "Food not found" }, { status: 404 });
  }

  return NextResponse.json(food);
}

export async function PATCH(req, context) {
    const dataGet = await req.json();
  const params = await context.params; // <-- unwrap the promise
  const id = Number(params.id);

  const foodFind = foods.find(f => f.id === id);

  if (!foodFind) {
    return NextResponse.json({ error: "Food not found" }, { status: 404 });
  }

  Object.assign(foodFind, dataGet);

  return NextResponse.json(
    {
      message: "Food added successfully",
      // foods,
    },
    { status: 201 }
  );

    // return NextResponse.json({ message: "Food updated", food: foodFind });

}