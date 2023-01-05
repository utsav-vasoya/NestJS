import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type UserDocument = User & Document;
import { Min, Max, IsInt } from 'class-validator';

@Schema()
export class User {
    @Prop({ required: true })
    name: string;

    @Prop()
    age: number;

    @Prop()
    @IsInt()
    @Min(0)
    @Max(10)
    phone: number;
}
export const UserSchema = SchemaFactory.createForClass(User);