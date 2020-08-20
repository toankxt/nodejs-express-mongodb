module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            description: String,
            published: Boolean,
            thumbnail: String,
            videoUrl: String,
            tagIds: []
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
};