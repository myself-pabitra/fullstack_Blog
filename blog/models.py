from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


status_options = (
    ("draft", "Draft"),
    ("published", "Published"),
)


class Post(models.Model):
    class PostObjectManager(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status="published")

    Category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=250)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date="published")
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="blog_posts"
    )
    status = models.CharField(max_length=10, default="published", choices=status_options)
    
    objects = models.Manager()  # Default Manager
    postobjects = PostObjectManager()  # Custom Manager

    class Meta:
        ordering = ("-published",)
        verbose_name_plural = "Posts"

    def __str__(self):
        return self.title
