from __future__ import unicode_literals
import spacy

nlp = spacy.load('en')

def remove_newlines(file):
  lines = open(file).readlines()
  return [l.rstrip('\n') for l in lines]

poem = nlp(' '.join(remove_newlines('the-dry-salvages-excerpt.txt')))

for word in poem:
  print word.text, word.lemma_
