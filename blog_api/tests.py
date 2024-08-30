from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from blog.models import Post, Category
from django.contrib.auth.models import User


class PostTestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="testuser", password="testpassword"
        )
        self.client.force_authenticate(user=self.user)
        self.category = Category.objects.create(name="test category")
        self.post = Post.objects.create(
            title="test post",
            content="test content",
            author=self.user,
        )

    def test_get_post(self):
        url = reverse("blog_api:post-detail", kwargs={"pk": self.post.pk})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["title"], self.post.title)

    def test_get_posts(self):
        url = reverse("blog_api:post-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]["title"], self.post.title)
