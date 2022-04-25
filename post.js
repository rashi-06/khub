export default{
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "text"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            option: {
                hotspot: true
            }
        },
        {
            name: "category",
            title: "Category",
            type: "string"
        },
        
        {
            name: "postedBy",
            title: "PostedBy",
            type: "postedBy"
        },
        {
            name: "save",
            title: "Save",
            type: "array",
            of: [{type: 'save'}]
        },
        {
            name: "userId",
            title: "UserId",
            type: "string"
        },
        {
            name: "comments",
            title: "Comments",
            type: "array",
            of: [{type : 'comment'}]
        },
       
    ]
}