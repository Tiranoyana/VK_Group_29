#!/bin/bash
cd directory
mkdir folder{1..3}
cd folder1
touch filename{1..3}.txt filename{1..2}.json
mkdir catalog{1..3}
ls
mv filename{2..3}.txt ../folder2

