from setuptools import setup

setup(name='python-simple',
      version='v1.0',
      description='Ultimate left padded hello world',
      author='Kgrid',
      author_email='kgrid-developers@kgrid.com',
      packages=['src'],
      install_requires=[
          'leftpad',
      ],
      zip_safe=False)