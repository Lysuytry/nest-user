import * as mongoose from 'mongoose';
import { Typegoose, prop } from 'typegoose';

// TS 2.4+ string enum example
enum Gender {
  MALE = 'male',
  FEMALE = 'female',
};

export class UserSchema extends Typegoose {
  @prop({ required: true })
  firstName!: string;

  @prop({ required: true })
  lastName!: string;

  @prop({ required: true })
  username!: string;

  @prop({ required: true })
  password!: string;

  @prop({ required: true })
  email!: string;

  @prop({ enum: Gender })
  gender?: Gender;
}

export const User = new UserSchema().setModelForClass(UserSchema, {
  schemaOptions: { collection: 'Users', timestamps: true },
  existingMongoose: mongoose
});
