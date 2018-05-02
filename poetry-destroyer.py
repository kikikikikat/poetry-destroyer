from __future__ import unicode_literals
import spacy
import prosodic

""" nlp = spacy.load('en')

def remove_newlines(file):
  lines = open(file).readlines()
  return [l.rstrip('\n') for l in lines]

poem = nlp(' '.join(remove_newlines('the-dry-salvages-excerpt.txt')))

for word in poem:
  print word.text, word.lemma_ """


text = prosodic.Text('the-dry-salvages-excerpt.txt')

print 'parse'
text.parse()

print 'bestParses'
print(text.meter)
for p in text.meter:
  print p

print 'scan'
for p in text.scan():
  print p

