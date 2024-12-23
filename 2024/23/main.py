# Set difference
def find_missing_numbers(nums):
    uniq = set(nums)
    max_range = set(i for i in range(1, max(uniq)))
    return [*max_range.difference(uniq)]


find_missing_numbers([1, 2, 4, 6])
# [3, 5]

find_missing_numbers([4, 8, 7, 2])
# [1, 3, 5, 6]

find_missing_numbers([3, 2, 1, 1])
# []

find_missing_numbers([5, 5, 5, 3, 3, 2, 1])
# [4]
