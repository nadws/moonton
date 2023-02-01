import Authenticated from "@/Layouts/Authenticated/index";
import SubscriptionCard from "@/Components/SubcriptionCard";
export default function SubscriptionPlan() {
    return (
        <Authenticated>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* <!-- Basic --> */}
                    <SubscriptionCard
                        name="basic"
                        price={80000}
                        durationInMonth={3}
                        features={["Feature1", "Feature2", "Feature3"]}
                    />
                    {/* <!-- For Greatest --> */}
                    <SubscriptionCard
                        name="Premium"
                        price={800000}
                        durationInMonth={3}
                        features={[
                            "Feature1",
                            "Feature2",
                            "Feature3",
                            "Feature4",
                            "Feature5",
                            "Feature6",
                        ]}
                        ispremium
                    />
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}
