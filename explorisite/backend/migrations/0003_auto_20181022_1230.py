# Generated by Django 2.1.2 on 2018-10-22 12:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_choice'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
