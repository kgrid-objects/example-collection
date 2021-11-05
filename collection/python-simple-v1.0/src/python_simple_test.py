import unittest
import welcome


class PythonSimple(unittest.TestCase):
    def test_welcome(self):
        self.assertEqual("Welcome to Knowledge Grid,Wilson",
                         welcome.welcome({"name": "Wilson", "spaces": 5}))


if __name__ == '__main__':
    unittest.main()
