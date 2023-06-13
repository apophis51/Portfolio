import os
import openai
openai.api_key = "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"
audio_file = open("run.mp3", "rb")
transcript = openai.Audio.transcribe("whisper-1", audio_file)

print(transcript)


