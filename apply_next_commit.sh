#!/bin/bash

# File with commit hashes
COMMIT_FILE="commit_hashes.txt"

# Check if the file exists and is not empty
if [[ ! -s $COMMIT_FILE ]]; then
    echo "No more commits to apply or $COMMIT_FILE does not exist."
    exit 1
fi

# Read the last commit hash
COMMIT_HASH=$(tail -n 1 "$COMMIT_FILE")

sed -i "" '$d' "$COMMIT_FILE"  # For macOS, use 'sed -i ""' instead of 'sed -i' for in-place editing

git cherry-pick "$COMMIT_HASH"
# # Attempt to cherry-pick the commit
# if ; then
#     # If successful, remove the last line (the applied commit) from the file
#     echo "Applied commit $COMMIT_HASH and removed it from $COMMIT_FILE."
# else
#     # If there's a cherry-pick conflict, exit without modifying the file
#     echo "Failed to apply commit $COMMIT_HASH. Resolve conflicts and continue manually."
#     exit 1
# fi

