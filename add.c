#if defined(WIN32) || defined(_WIN32)
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

EXPORT float add(float* inputs, int len) {
  float total = 0;
  for(int i = 0; i < len; i++) {
    total += inputs[i];
  }

  return total;
}
