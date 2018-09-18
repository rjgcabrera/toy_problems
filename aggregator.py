"""
A simple general purpose aggregator

Usage: aggregator.py <filename> <topic>
filename: input  file that contains a list of the online sources (urls).
topic:  topic to be researched and reported on
"""

import urllib.request
import urllib.parse
import urllib.error
import re
import os
import sys


def find_match(input_file, topic):
    """

    :return: dictionary of urls (keys) with corresponding list of match groups
    """
    
    url_dict = {}
    i = 0
    with open (input_file, 'r') as myfile:
        array = []
        for line in myfile:
            array.append(line)
            if re.search("(?P<url>http?://[^\s]+)",array[i]) is None:
                i += 1
                continue

            # Extract URL from file line by line
            full_url = (re.search("(?P<url>http?://[^\s]+)",array[i]).group("url"))
            req = urllib.request.Request(full_url)

            try:
                with urllib.request.urlopen(req) as response:
                    response
                    html = response.read().decode('latin-1')
                    filter = re.findall("(<[^>\n]*>)",html.strip())
                    extract_data = html[:]
                    for word in filter:
                        extract_data = extract_data.replace(word,'\n')
                        url_dict[full_url] = matches(extract_data, topic)

            except urllib.error.URLError as e:
                print("Error opening url: %s" % full_url)
                print("HTTP Error %s: %s" % (e.code, e.reason))

            # Get next url
            i += 1
    return url_dict

def matches(html_data, topic):
    """

    :return: list of regex match groups
    """

    match_list = []
    for line in html_data.splitlines():
        if re.search(topic, line, re.IGNORECASE):
            if line is not None:
                match_list.append(line)
    return match_list


def main():
    total_args = len(sys.argv)
    if total_args < 3 or total_args > 3:
        print("Error: invalid number of arguments")
        print ("Usage: aggregator.py filename topic")
        sys.exit(1)
  
    match_dict = find_match(sys.argv[1], sys.argv[2])
    
    outfile = open(str(sys.argv[2]) + 'summary.txt', 'a')

    for key in match_dict:
        outfile.write('\n---------- Source url:%s ----------\n' % key)
        for match in match_dict[key]:
            outfile.write(match + '\n')
    outfile.close()


if __name__ == '__main__':
    try:
        main()
    except(KeyboardInterrupt):
        print ('Program terminated.')
        sys.exit(1)

