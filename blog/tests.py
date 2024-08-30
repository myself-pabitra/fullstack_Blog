from django.test import TestCase
from django.contrib.auth.models import User
from .models import Post, Category


class TestCreatePost(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name="Test Category")
        self.user = User.objects.create_user(
            username="testuser", password="testpassword"
        )
        self.post = Post.postobjects.create(
            title="Test Post",
            excerpt="Test Post Excerpt",
            content="Test Post Content",
            slug="test-post",
            author=self.user,
        )

    def test_post_creation(self):
        self.assertEqual(str(self.post), "Test Post")
        self.assertEqual(self.post.excerpt, "Test Post Excerpt")
        self.assertEqual(self.post.content, "Test Post Content")
        self.assertEqual(self.post.slug, "test-post")
        self.assertEqual(self.post.author.username, "testuser")
        self.assertEqual(self.post.status, "published")
        self.assertEqual(str(self.post.Category), "Test Category")

    def test_post_published(self):
        self.post.status = "published"
        self.post.save()
        self.assertEqual(self.post.status, "published")
