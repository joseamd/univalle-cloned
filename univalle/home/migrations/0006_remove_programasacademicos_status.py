# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_auto_20161015_2142'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='programasacademicos',
            name='status',
        ),
    ]
