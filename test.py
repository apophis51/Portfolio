import os
import openai
openai.api_key = "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"
audio_file = open("run.mp3", "rb")
transcript = openai.Audio.transcribe("whisper-1", audio_file)

print(transcript)


