from django.contrib import admin
from .models import Post, Category


admin.site.register(Post)


class AuthorAdmin(admin.ModelAdmin):
    list_display = ("title", "id", "author", "status", "slug")
    prepopulated_fields = {"slug": ("title",)}


admin.site.register(Category)
