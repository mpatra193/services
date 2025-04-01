import { Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../assets/Company Logo 1.png"

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white py-12 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-6">
                    <div className="md:col-span-4">
                        <div className="mb-6">
                            <div className="flex-col items-center mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="174" height="63" viewBox="0 0 174 63" fill="none">
                                    <mask id="path-1-outside-1_252_8450" maskUnits="userSpaceOnUse" x="-1.94882" y="-13.1422" width="183.048" height="79.0019" fill="black">
                                        <rect fill="white" x="-1.94882" y="-13.1422" width="183.048" height="79.0019" />
                                        <path d="M79.3007 5.27357C37.6212 -3.87551 79.743 16.4012 119.938 34.0167C125.586 29.9906 136.064 17.7338 79.3007 5.27357Z" />
                                    </mask>
                                    <path d="M119.938 34.0167L120.54 32.6429L119.76 32.3012L119.067 32.7953L119.938 34.0167ZM172.943 57.576C173.707 57.2544 174.065 56.3749 173.744 55.6114L168.504 43.1697C168.182 42.4062 167.303 42.0479 166.539 42.3695C165.776 42.691 165.418 43.5706 165.739 44.3341L170.397 55.3933L159.337 60.0509C158.574 60.3724 158.216 61.252 158.537 62.0155C158.859 62.779 159.738 63.1372 160.502 62.8157L172.943 57.576ZM117.68 35.3935L117.481 36.8803L117.926 36.9397L118.331 36.7446L117.68 35.3935ZM119.336 35.3906C132.664 41.2315 145.778 46.7793 155.559 50.8664C160.45 52.9101 164.509 54.5889 167.344 55.7569C168.762 56.3409 169.875 56.7972 170.633 57.1076C171.012 57.2628 171.302 57.3815 171.498 57.4614C171.596 57.5014 171.67 57.5317 171.72 57.552C171.745 57.5622 171.764 57.5698 171.776 57.575C171.783 57.5775 171.787 57.5795 171.791 57.5808C171.792 57.5814 171.793 57.5819 171.794 57.5822C171.795 57.5824 171.795 57.5825 171.795 57.5826C171.795 57.5827 171.795 57.5827 172.361 56.1936C172.927 54.8044 172.927 54.8043 172.927 54.8043C172.927 54.8042 172.926 54.8041 172.926 54.8039C172.925 54.8036 172.924 54.8032 172.922 54.8025C172.919 54.8013 172.915 54.7994 172.909 54.7968C172.896 54.7918 172.878 54.7842 172.853 54.7741C172.803 54.754 172.73 54.7239 172.632 54.6841C172.437 54.6045 172.148 54.4861 171.769 54.3313C171.013 54.0216 169.903 53.5661 168.487 52.9829C165.655 51.8166 161.601 50.1398 156.716 48.0984C146.944 44.0152 133.847 38.4746 120.54 32.6429L119.336 35.3906ZM0.801419 21.3287L117.481 36.8803L117.878 33.9066L1.19777 18.355L0.801419 21.3287ZM117.68 35.3935C118.331 36.7446 118.331 36.7445 118.331 36.7445C118.331 36.7444 118.332 36.7443 118.332 36.7443C118.332 36.7442 118.332 36.7441 118.332 36.7439C118.333 36.7437 118.334 36.7434 118.334 36.7431C118.336 36.7424 118.337 36.7417 118.339 36.7408C118.342 36.739 118.347 36.7368 118.353 36.7341C118.364 36.7286 118.379 36.7213 118.397 36.712C118.434 36.6934 118.486 36.6671 118.551 36.6334C118.68 36.5659 118.862 36.4682 119.084 36.3416C119.527 36.0889 120.136 35.7177 120.809 35.2381L119.067 32.7953C118.493 33.2048 117.973 33.522 117.598 33.7354C117.412 33.8418 117.263 33.9216 117.163 33.9734C117.114 33.9992 117.077 34.018 117.054 34.0296C117.042 34.0354 117.034 34.0393 117.03 34.0415C117.028 34.0425 117.026 34.0431 117.026 34.0433C117.026 34.0434 117.026 34.0433 117.026 34.0432C117.026 34.0431 117.027 34.043 117.027 34.0428C117.027 34.0428 117.027 34.0427 117.027 34.0426C117.028 34.0426 117.028 34.0425 117.028 34.0425C117.028 34.0424 117.028 34.0423 117.68 35.3935ZM79.3007 5.27357L78.6575 8.2038L79.3007 5.27357ZM119.938 34.0167L118.734 36.7645L120.293 37.4478L121.68 36.4595L119.938 34.0167ZM79.9439 2.34333C74.6945 1.19102 70.6664 0.47941 67.7418 0.175405C66.2856 0.0240295 65.0139 -0.0361913 63.9583 0.0240799C63.0421 0.07639 61.7522 0.236963 60.706 0.961628C60.0927 1.38647 59.4818 2.0653 59.2179 3.03607C58.9634 3.97228 59.1321 4.813 59.3573 5.40485C59.7624 6.46945 60.5725 7.31981 61.2102 7.90799C62.5973 9.18742 64.7775 10.6436 67.3875 12.1896C77.9184 18.4272 98.6727 27.9726 118.734 36.7645L121.142 31.269C101.008 22.4453 80.6042 13.0446 70.4453 7.02724C67.8829 5.50946 66.1699 4.32014 65.2781 3.49755C64.7763 3.03473 64.8505 2.96997 64.965 3.271C65.0449 3.48107 65.1797 3.9779 65.0078 4.61005C64.8266 5.27677 64.4149 5.6914 64.1226 5.89384C63.7186 6.17371 63.558 6.0567 64.3003 6.01432C64.9032 5.9799 65.8192 6.00788 67.1215 6.14325C69.7141 6.41274 73.4871 7.06884 78.6575 8.2038L79.9439 2.34333ZM121.68 36.4595C123.238 35.3487 125.456 33.4591 126.673 30.846C127.304 29.4903 127.682 27.9038 127.515 26.1537C127.348 24.4011 126.654 22.68 125.44 21.0303C123.081 17.8227 118.655 14.7347 111.574 11.698C104.422 8.63087 94.2327 5.47986 79.9439 2.34333L78.6575 8.2038C92.7506 11.2974 102.538 14.3511 109.209 17.2123C115.952 20.104 119.197 22.6681 120.607 24.5855C121.278 25.4983 121.493 26.208 121.543 26.7229C121.592 27.2404 121.492 27.7583 121.234 28.3126C120.672 29.5194 119.462 30.6717 118.197 31.5739L121.68 36.4595Z" fill="white" mask="url(#path-1-outside-1_252_8450)" />
                                </svg>
                                <span className="text-white font-medium">Subscribe to our mailing</span>

                            </div>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Mail className="h-4 w-4 text-gray-400" />
                                </div>
                                <Input
                                    type="email"
                                    placeholder="Enter email"
                                    className="bg-white bg-opacity-10 border-0 text-white pl-10 pr-24 h-10 w-full rounded-full"
                                />
                                <Button className="absolute right-0 top-0 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full px-4">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-3">
                                <img src={logo} alt="carbon crunch logo"  />
                            </div>
                            <span className="text-xl font-bold">Carboncrunch</span>
                        </div>
                    </div>
                    <div className="md:col-span-8 m-auto">
                        <div className="grid grid-cols-3 gap-20">
                            <div>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
                                    <li><a href="#" className="hover:text-green-400 transition-colors">About</a></li>
                                    <li><a href="#" className="hover:text-green-400 transition-colors">How it works</a></li>
                                    <li><a href="#" className="hover:text-green-400 transition-colors">Contact us</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-green-400 transition-colors">FAQs</a></li>
                                    <li><a href="#" className="hover:text-green-400 transition-colors">Start your transaction</a></li>
                                    <li><a href="#" className="hover:text-green-400 transition-colors">Why choose us</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-green-400 transition-colors">Businesses</a></li>
                                    <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:text-green-400 transition-colors">Refund Policy</a></li>
                                    <li><a href="#" className="hover:text-green-400 transition-colors">Terms & conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-400">© Carboncrunch. All Rights Reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-green-400 transition-colors"><Mail size={18} /></a>
                        <a href="#" className="hover:text-green-400 transition-colors"><Facebook size={18} /></a>
                        <a href="#" className="hover:text-green-400 transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="hover:text-green-400 transition-colors"><Instagram size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
