def caesar_cipher():
    # Prompt the user for the number of shifts
    shift = int(input("Enter the number of shifts: "))

    # Define the alphabet
    alphabet = 'abcdefghijklmnopqrstuvwxyz'

    # Create a dictionary to map each character to its encoded value
    encoding_dict = {}
    for i in range(len(alphabet)):
        letter = alphabet[i]
        encoded_letter = alphabet[(i + shift) % len(alphabet)]
        encoding_dict[letter] = encoded_letter
        encoding_dict[letter.upper()] = encoded_letter.upper()

    # Prompt the user for the text to encode
    text = input("Enter the text to encode: ")

    # Encode the text
    encoded_text = ''.join([encoding_dict.get(char, char) for char in text])
    print("Encoded text: ", encoded_text)

    # Create a dictionary to map each encoded character back to its original value
    decoding_dict = {v: k for k, v in encoding_dict.items()}

    # Decode the text
    decoded_text = ''.join([decoding_dict.get(char, char) for char in encoded_text])
    print("Decoded text: ", decoded_text)

# Call the function
caesar_cipher()