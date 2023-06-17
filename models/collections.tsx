import { Schema, model, models, Model, Document } from "mongoose";

interface IUrl extends Document {
  url: string;
}

interface ICollection extends Document {
  name: string;
  urls: [IUrl];
  rating: number;
}

const urlSchema: Schema = new Schema({
  url: {
    type: String,
    required: true,
  },
});

const CollectionSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    urls: {
      type: [urlSchema],
      required: true,
    },
    rating: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

const Collection: Model<ICollection> =
  models.Collection || model("collections", CollectionSchema);

export default Collection;
