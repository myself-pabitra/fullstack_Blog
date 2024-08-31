from rest_framework import serializers
from blog.models import Post


class PostSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='blog_api:post-detail',
        lookup_field='pk'  
    )

    category_name = serializers.CharField(source='Category.name',read_only=True)
    author_name = serializers.CharField(source='author.first_name', read_only=True)  

    formatted_published = serializers.DateTimeField(format="%B %d, %Y", source='published', read_only=True)

    class Meta:
        model = Post
        fields = (
            "id",
            "title",
            "author",  
            "author_name",
            "excerpt",
            "content",
            "post_Thumbnail",
            "status",
            "Category",
            "category_name",
            "url",
            "formatted_published"
        )
