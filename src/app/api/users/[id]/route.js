import connectionToMongoDb from "@/lib/mongoose";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  try {
    await connectionToMongoDb();
    const { id } = await params;
    const deleteDutyById = await User.findByIdAndDelete(id);
    return NextResponse.json({ success: deleteDutyById }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to delete users" },
      { status: 500 }
    );
  }
}
